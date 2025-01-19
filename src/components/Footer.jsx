import "../assets/stylesheets/footer.css";
import "../index.css";

function Footer() {
    return (<>
        <div className="footer_container">
            <div className="footer">
                <div className="footer_titles">Benefits</div>
                <div className="footer_sub">
                    <div className="sub_list">Find a Local Organization</div>
                    <div className="sub_list">Analyze Relevant Statistics</div>
                    <div className="sub_list">Use Heatmap</div>
                </div>
            </div>

            <div className="footer">
                <div className="footer_titles">Explore</div>
                <div className="footer_sub">
                    <div className="sub_list">Local Pantries & Distribution Centers</div>
                    <div className="sub_list">AI Powered Recipes</div>
                    <div className="sub_list">Search Inventories</div>
                </div>
            </div>

            <div className="footer">
                <div className="footer_titles">Resources</div>
                <div className="footer_sub">
                    <div className="sub_list">List of Organizations & Centers</div>
                    <div className="sub_list">Support</div>
                    <div className="sub_list">Contact us</div>
                </div>
            </div>
        </div>
    </>);
}

export default Footer;