import React from 'react'
import CKEditor from 'ckeditor4-react'


class PostEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post_title: '',
      ck_data: '',
      post_cate: 'none',
      theme_cate: 'none',
      post_visible: '顯示',
    }

    this.onEditorChange = this.onEditorChange.bind(this)
    this.changeState = this.changeState.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onEditorChange(evt) {
    this.setState({
      ck_data: evt.editor.getData(),
    })
  }

  changeState(evt) {
    let changeName = evt.target.name
    this.setState({
      [changeName]: evt.target.value,
    })
  }

  submitForm = () => {
    // evt.preventDefault()
    let data = {
      post_title: this.state.post_title,
      post_content: this.state.ck_data,
      post_cate: this.state.post_cate,
      theme_cate: this.state.theme_cate,
      post_visible: this.state.post_visible,
      mem_id: localStorage.getItem('mem_id'),
    }

    let title = this.state.post_title
    let content = this.state.ck_data
    let post_cate = this.state.post_cate
    let theme_cate = this.state.theme_cate
    let visible = this.state.post_visible

    if (
      title !== '' &&
      content !== '' &&
      post_cate !== 'none' &&
      theme_cate !== 'none' &&
      visible !== ''
    ) {
      window.location.replace('/Member/MyPostList')
      console.log(title)
      fetch('http://localhost:5000/ckeditor', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error('Bad response from server')
          }
          return response.json()
        })
        .catch(function(err) {
          console.log(err)
        })
    } else {
      alert('請確認填寫所有欄位')
    }
  }

  render() {
    return (
      <div className="App col-lg-10 px-0">
        <main className="">
          <div className="">
            <form
              name="form1"
              id="form1"
              onSubmit={e => {
                e.preventDefault()
                return this.submitForm()
              }}
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
                    onChange={this.changeState}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <CKEditor
                    ck_data={this.state.ck_data}
                    onChange={this.onEditorChange}
                    config={{
                      toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
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
                    onChange={this.changeState}
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
                    onChange={this.changeState}
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
                      onChange={this.changeState}
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
                      onChange={this.changeState}
                      checked={this.state.post_visible === '隱藏'}
                    />
                    隱藏
                  </label>
                </div>
                <button id="submit_btn" type="submit" className="btn btn-grass">
                  發布
                </button>
              </div>
            </form>
          </div>
        </main>
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

export default PostEditor
