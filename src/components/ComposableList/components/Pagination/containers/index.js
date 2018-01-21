import { connect } from "react-redux";
import { gotoPage } from "../../../redux/paginate/actions";
import Pagination from "../components";

export default connect(null, { gotoPage })(Pagination);
