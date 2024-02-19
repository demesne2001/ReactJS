import React from 'react'
import user from './assets/images/users/1.jpg'

export default function Header() {
    return (
        <div>
            <div class="topbar-alignment">
                <div class=" page-titles">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6  align-self-center">
                            <div class="page-title-alignment">
                                <img src={user} alt="user" class="profile-pic" />
                                <h3 class="text-themecolor header-title">CEO-DASHBOARD</h3>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 align-self-center">
                            <div class="title-date">
                                <button
                                    class="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"
                                    onclick="myFunction1()"><i class="mdi mdi-filter-outline"></i></button>
                                <h6 class="headalign"> <input type="date" class="date1" /></h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
