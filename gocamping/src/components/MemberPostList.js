import React from 'react'
import Modal from 'react-modal'
import moment from 'moment'
import CKEditor from 'ckeditor4-react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import LinesEllipsis from 'react-lines-ellipsis'

const customStyles = {
  content: {
    maxWidth: '1000px',
    height: '100%',
    margin: '0 auto',
    paddingTop: '60px',
    display: 'flex',
    justifyContent: 'center',
  },
}


class PostList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contents: [],
      modalIsOpen: false,
      post_title: '',
      post_content: '',
      post_cate: '',
      theme_cate: '',
      post_visible: '',
      post_id: 0,
      mem_id: localStorage.getItem('mem_id'),
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.ckChange = this.ckChange.bind(this)
    this.logChange = this.logChange.bind(this) // We capture the value and change state as user changes the value here.
    this.handleEdit = this.handleEdit.bind(this) // Function where we submit data
  }

  openModal(data) {
    console.log(data)

    this.setState({
      modalIsOpen: true,
      post_title: data.post_title,
      post_content: data.post_content,
      post_cate: data.post_cate,
      theme_cate: data.theme_cate,
      post_visible: data.post_visible,
      post_id: data.post_id,
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    })
  }

  ckChange(e) {
    this.setState({
      post_content: e.editor.getData(),
    })
    console.log(e.editor.getData())
  }

  logChange(e) {
    this.setState({
      [e.target.name]: e.target.value, //setting value edited by the admin in state.
    })
  }

  handleEdit(evt) {
    evt.preventDefault()
    let data = {
      post_title: this.state.post_title,
      post_content: this.state.post_content,
      post_cate: this.state.post_cate,
      theme_cate: this.state.theme_cate,
      post_visible: this.state.post_visible,
      post_id: this.state.post_id,
    }
    fetch('http://localhost:5000/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(function(data) {
        window.location.reload()
        console.log(data)
        if (data === 'success') {
          // alert('文章修改成功')
        }
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  deletePost(content) {
    var data = {
      post_id: content.post_id,
    }
    let answer = window.confirm('確定要刪除這篇文章？')
    if (answer === true) {
      fetch('http://localhost:5000/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error('Bad response from server')
          }
          return response.json()
        })
        .then(function(data) {
          window.location.reload()
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  }

  componentDidMount() {
    let self = this
    const mem_id = this.state.mem_id
    fetch('http://localhost:5000/post-list/' + mem_id)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(function(data) {
        self.setState({
          contents: data,
        })
      })
      .catch(err => {
        console.log('caught it!', err)
      })
    $('table').on('click', '.to_preview', function() {
      $(this)
        .closest('tr')
        .find('.preview')
        .addClass('active')
      return false
    })
    $('html').on('click', '.close_pre', function() {
      $(this)
        .closest('td')
        .find('.preview')
        .removeClass('active')
      return false
    })
    $('html').on('click', '.to_close', function(event) {
      event.preventDefault()
      event.stopPropagation()
      if ($(this) !== $('.article')) {
        $(this)
          .closest('td')
          .find('.preview')
          .removeClass('active')
        return false
      }
    })
  }

  render() {
    let data = this.state.contents
    return (
      <div className="App col-lg-10 px-0">
        <div className="container-fluid post_list">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mb-3">
              <div>
                <Link to="/Member/MyPostEditor">
                  <button type="button" className="btn btn-grass">
                    新增文章
                  </button>
                </Link>
              </div>
              <div>
                <form className="form-inline my-2 my-lg-0" method="get">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="搜尋文章"
                    aria-label="Search"
                    name="search"
                    value=""
                  />
                  <input
                    className="btn btn-grass my-2 my-sm-0"
                    type="submit"
                    value="搜尋"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 d-flex justify-content-end">
              <ul className="pagination pagination-sm">
                <li className="page-item <?= $page <= 1 ? 'disabled' : '' ?>">
                  <a className="page-link" href="?page=<?= $page - 1 ?>">
                    &lt;
                  </a>
                </li>
                <li className="page-item <?= $i == $page ? 'active' : '' ?>">
                  <a className="page-link" href="?page=<?= $i ?>">
                    i
                  </a>
                </li>
                <li className="page-item <?= $page >= $total_pages ? 'disabled' : '' ?>">
                  <a className="page-link" href="?page=<?= $page + 1 ?>">
                    &gt;
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="row">
            <div className="col-lg-12">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">編號</th>
                    {/* <th scope="col">分類</th> */}
                    <th scope="col">標題</th>
                    <th scope="col">發布時間</th>
                    <th scope="col">瀏覽</th>
                    <th scope="col">公開</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {/* foreach ($rows as $row) */}
                  {data.map((content, i) => (
                    <tr key={content.post_id}>
                      <td className="post_id" data-postid="">
                        {content.post_id}
                      </td>
                      {/* <div className="">{content.theme_cate}</div> */}
                      <td>
                        <Link
                          onClick={this.forceUpdate}
                          to={'/ShareFun/post/' + content.post_id}
                        ><LinesEllipsis text={content.post_title}  maxLine='1' ellipsis='...' trimRight basedOn='letters'/>
                          {/* {content.post_title} */}
                        </Link>
                        <div className="preview">
                          <input
                            type="hidden"
                            name="post_id"
                            value="<?= $row['post_id'] ?>"
                          />
                          <div className="d-flex justify-content-center">
                            <div className="to_close col-lg-2" />
                            <div className="article col-lg-8 bg-white p-5 ">
                              <div className="d-flex justify-content-end pt-3">
                                <Link to="" className="close_pre">
                                  <i className="fas fa-times-circle" />
                                </Link>
                              </div>
                              <div className="px-5">
                                <h2 className="py-3 px-5 text-left">
                                  {content.post_title}
                                </h2>
                                <div
                                  className="px-5"
                                  dangerouslySetInnerHTML={{
                                    __html: content.post_content,
                                  }}
                                />
                              </div>
                            </div>
                            <div className="to_close col-lg-2" />
                          </div>
                        </div>
                      </td>
                      <td>
                        {moment(content.post_time).format(
                          'YYYY/MM/DD HH:mm:ss'
                        )}
                      </td>

                      <td>{content.browse_num}</td>

                      <td>{content.post_visible}</td>
                      <td className="edit">
                        <Link className="to_preview mx-1 p-1" href="">
                          <i className="fas fa-eye" />
                        </Link>
                        <Link
                          className="mx-1 p-1"
                          onClick={() => this.deletePost(content)}
                        >
                          <i className="fas fa-trash-alt" />
                        </Link>
                        <Link
                          className="mx-1 p-1"
                          onClick={() => this.openModal(content)}
                        >
                          <i className="fas fa-edit" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="App col-lg-10 px-0">
            <main className="">
              <div className="">
                {/* {data.map((content, i) => ( */}
                <form
                  name="form1"
                  id="form1"
                  onSubmit={this.handleEdit}
                  method="POST"
                >
                  <div className="row my-3">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="form-control"
                        id="post_title"
                        name="post_title"
                        placeholder="文章標題"
                        value={this.state.post_title}
                        onChange={this.logChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <CKEditor
                        name="post_content"
                        // ck_data={this.state.post_content}
                        data={this.state.post_content}
                        onChange={this.ckChange}
                        config={{
                          toolbarGroups: [
                            {
                              name: 'clipboard',
                              groups: ['clipboard', 'undo'],
                            },
                            {
                              name: 'document',
                              groups: ['mode', 'document', 'doctools'],
                            },
                            {
                              name: 'editing',
                              groups: ['find', 'selection', 'editing'],
                            },
                            { name: 'forms', groups: ['forms'] },
                            {
                              name: 'basicstyles',
                              groups: ['basicstyles', 'cleanup'],
                            },
                            {
                              name: 'paragraph',
                              groups: [
                                'list',
                                'indent',
                                'blocks',
                                'align',
                                'bidi',
                                'paragraph',
                              ],
                            },
                            { name: 'links', groups: ['links'] },
                            { name: 'insert', groups: ['insert'] },
                            { name: 'styles', groups: ['styles'] },
                            { name: 'colors', groups: ['colors'] },
                            { name: 'tools', groups: ['tools'] },
                            { name: 'others', groups: ['others'] },
                            { name: 'about', groups: ['about'] },
                          ],
                          removeButtons:
                            'Subscript,Superscript,Maximize,Source,About,HorizontalRule,Anchor,Blockquote,',
                          height: '50vh',
                          removePlugins: 'resize',
                        }}
                        //                     {id:"Upload",hidden:0,filebrowser:"uploadButton",label:d.lang.image.upload,elements:[{type:"file",id:"upload",label:d.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:d.lang.image.btnUpload,
                        // "for":["Upload","upload"]}]}
                      />

                      {/* <EditorPreview ck_data={this.state.ck_data} /> */}
                    </div>
                  </div>
                  <div className="row mt-3 d-flex align-items-center">
                    <div className="col-lg-2 ">
                      <select
                        className="form-control custom-select mr-sm-2"
                        name="post_cate"
                        id="post_cate"
                        value={this.state.post_cate}
                        onChange={this.logChange}
                      >
                        <option value="none" disabled>
                          難度分類
                        </option>
                        <option value="4">露營幼幼班</option>
                        <option value="5">露營小遊俠</option>
                        <option value="6">露營老江湖</option>
                      </select>
                    </div>
                    <div className="col-lg-2 ">
                      <select
                        className="form-control custom-select mr-sm-2"
                        name="theme_cate"
                        id="theme_cate"
                        value={this.state.theme_cate}
                        onChange={this.logChange}
                        required
                      >
                        <option value="none" disabled>
                          主題分類
                        </option>
                        <option value="family">親子同遊</option>
                        <option value="friends">好友相聚</option>
                        <option value="natural">生態體驗</option>
                        <option value="night">夜間活動</option>
                        <option value="food">就是愛吃</option>
                        <option value="equipments">裝備分享</option>
                      </select>
                    </div>
                    <div className="form-check form-check-inline m-3">
                      要顯示這篇文章嗎？
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="visible">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="post_visible"
                          id="visible"
                          value="顯示"
                          onChange={this.logChange}
                          checked={this.state.post_visible === '顯示'}
                        />
                        顯示
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="invisible">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="post_visible"
                          id="invisible"
                          value="隱藏"
                          onChange={this.logChange}
                          checked={this.state.post_visible === '隱藏'}
                        />
                        隱藏
                      </label>
                    </div>
                    <button
                      id="submit_btn"
                      type="submit"
                      className="btn btn-grass"
                    >
                      發布
                    </button>
                  </div>
                </form>
                {/* ))} */}
              </div>
            </main>
          </div>
        </Modal>
      </div>
    )
  }
}

// class EditorPreview extends React.Component {
//   render() {
//     return (
//       <div className="editor-preview">
//         <h2>Rendered content</h2>
//         <div dangerouslySetInnerHTML={{ __html: this.props.ck_data }} />
//       </div>
//     )
//   }
// }

// EditorPreview.defaultProps = {
//   data: '',
// }

// EditorPreview.propTypes = {
//   data: PropTypes.string,
// }

export default PostList
