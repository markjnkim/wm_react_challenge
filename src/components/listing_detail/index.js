import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import styled from "styled-components";


const ListingDetail = ({listing}) => (
        <div>
            Listing Detail
        </div>
    );






const mapStateToProps = (state) => {
    return { listing: state.listing }
} 

export default connect(mapStateToProps)(ListingDetail);
