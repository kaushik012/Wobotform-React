import image from '../../constants/images';
import './Form.css';



function Form() {
  return (
    <div className="app-form">
        <div className="header">
            <div className="form_logo">
                <img src={image.formLogo} alt="form-logo" />
            </div>
            <div className="heading">
                <h2>It's a delight to have you onboard</h2>
            </div>
        </div>
        <div className="app_p">
            <h6>Help us know you better.</h6>
            <h6>(This is how we optimize Wobot as per your business needs)</h6>
        </div>
        <form className="app__form">
            <div className="app-form-name">
                <label htmlFor="cname">Company name</label>
                <input type="text" id="cname" name="cname" placeholder="e.g. Example Inc"/>
            </div>
            <div className="app-form-dropdowm">
                <label htmlFor="industry">Industry</label>
                <select name="industry" id="industry">
                    <option value="Select">Select</option>
                </select>
            </div>
            <div className="app-form-option">
                <label htmlFor="option">Company size</label>
                <div className="options">
                    <button className="option-button">1-20</button>
                    <button className="option-button">21-50</button>
                    <button className="option-button">51-200</button>
                    <button className="option-button">201-500</button>
                    <button className="option-button">500+</button>
                </div>
            </div>
            <button className="app-form-button">Get Started</button>
        </form>
    </div>
  );
}

export default Form