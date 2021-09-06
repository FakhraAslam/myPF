import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div>
            <section className="contact_header">
                <h1 className="text-box">My Contact Information</h1>
            </section>
            <section className="contact-main">
                <div className="one_con">
                    <FontAwesomeIcon className="help" icon="question" />
                    <h3 style={{ color: "#F26B8A" }}>Get help</h3>
                    <p style={{ margin: "10px", color: "grey" }}>if any beginner is seeing this and want to ask some help, can contact me at </p>
                    <p className="mail-L">knowledgeseekers77@gmail.com</p>
                    <p className="mail-s">knowledgeseekers77<br />@gmail.com</p>
                    <p style={{ color: "grey" }}>Open to suggestions</p>
                </div>
                <div className="two_con">
                    <FontAwesomeIcon className="help" icon="comment" />
                    <h3 style={{ color: "#F26B8A" }}>Contact me</h3>
                    <p style={{ margin: "10px", color: "grey" }}>other contact details are  listed below <br/> work email :</p>
                    <p className="mail-L">fakhraaslam1221@gmail.com</p>
                    <p className="mail-s">fakhraaslam1221<br />@gmail.com</p>
                    <p style={{ color: "grey" }}>Open to Work</p>
                </div>
            </section>
            <br />    <br />
        </div>
    )
}
export default Contact;