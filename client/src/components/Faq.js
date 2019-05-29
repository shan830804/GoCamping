import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const Faq = () => (
    <div className="container">
        <div className="py-4">
            <h4 className="grass text-center fs-32 mb-3">常見問題集</h4>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Q1：平日晚上及假日，聯絡不到客服，該怎麼辦？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            客服專線02-8765-4321，服務時間是週一至週五9：00～12：00/13：00～18：00。若假日期間有任何問題或無法於上班時段撥打，可來信至service@gocampinggroup.com.tw，及FB&LINE@私訊留言，將於上班服務時段，由專人為您服務唷！
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Q2：我己經訂位完成，但想修改日期，該怎麼做？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            一般的延期或取消訂單，需於入住前14天進行告知更改，不然會有依天數不同的違約金產生。請先看好欲更換的日期是否有空位，再致電客服02-8765-4321(週一至週五，服務時間9：00～12：00/13：00～18：00)，或利用GO CAMPING 趣露營的FB&LINE@私訊留言，將會有專人為您服務唷！
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Q3：請問如果營區下雨，想改日期需要怎麼做呢？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            入住3日前發現有天候之因素，將依照露營當地的氣象局警特報發布，為參考依據進行改期及全額退款，以保障露友及營主之權益。
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Q4：是否有候位&候補的機制？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            目前沒有提供排隊的服務，可留意官網上營區訂位，若有客人放棄，都會最即時的釋出庫存唷！
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            Q5：我把訂位證明用不見了，該怎辦？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            請放心，每個營地的營地主都可以透過後台查詢，只需提供您的訂位姓名電話即可！
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Q6：請問訂位，要怎麼付款呢？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            完成下訂後，依您選擇的付款方式，如為ATM轉帳或ibon，在訂購流程的最後一步您將可以看到繳款的專屬帳號唷！
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="6">
                            Q7：請問營區訂位完成，需幾日內匯款？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            信用卡付款為即時付帳，ATM轉帳&ibon，則請在三日內完成匯款，如繳款逾期該訂單將自動作廢，不進行保留，請特別留意。
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="7">
                            Q8：我有完成線上訂位與匯完訂金，但沒有需要核對匯款的訊息嗎？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            請放心，系統在您匯款完成後，將自動進行核帳，以節省雙方的溝通來往時間唷！
                            ATM轉帳：於繳款成功24小時內，會寄發繳款成功之Email。
                            ibon：於繳款次日會收到繳款成功之Email。
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="8">
                            Q9：如因露營當地的氣象局警特報發布而無法成行，該如何退款？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            如果情況適當，將會由各營地主與您聯絡並透過各銀行進行退款。
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="9">
                            Q10：如果我無法登入，或是忘記我的會員登入帳號與密碼，該怎麼辦？
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                        <Card.Body>
                            目前尚未設置「忘記密碼」之按鈕，您可來信至service@gocampinggroup.com.tw，及FB&LINE@私訊留言，將於上班服務時段，由專人為您服務唷！
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

    </div>
)

export default Faq