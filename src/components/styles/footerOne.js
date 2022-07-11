import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    footer.footer1 {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        position           : relative;
        padding            : 235px 0 55px;

        &:before {
            position  : absolute;
            content   : "";
            background: ${colors.bg1};
            opacity   : 0.98;
            width     : 100%;
            height    : 100%;
            top       : 0;
            left      : 0;
        }

        .footer-logo-info {
            img {
                margin-bottom: 30px;

                @media(max-width: 575px) {
                    margin-bottom : 20px;
                }
            }

            p {
                font-size    : 14px;
                color        : ${colors.text3};
                line-height  : 28px;
                margin-bottom: 20px;
            }

            ul {
                li {
                    color        : ${colors.text3};
                    margin-bottom: 12px;

                    i {
                        font-size     : 18px;
                        color         : ${colors.yellow};
                        width         : 35px;
                        vertical-align: top;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 30px;
            }
        }

        .f-links {
            h5 {
                color         : ${colors.border1};
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 35px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            ul {
                float: left;
                width: 50%;

                li {
                    a {
                        font-size  : 14px;
                        color      : ${colors.text3};
                        line-height: 38px;

                        i {
                            font-size   : 12px;
                            color       : ${colors.yellow};
                            margin-right: 10px;
                        }

                        &:hover {
                            color: ${colors.yellow};
                        }

                        @media(max-width: 991px) {
                            font-size: 13px;
                            letter-spacing: 0;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 20px;
                display: inline-block;
            }
        }

        .f-post {
            h5 {
                color         : ${colors.border1};
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 45px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            .post-box {
                margin-bottom: 12px;

                .post-img {
                    img {
                        max-width: 80px;
                        border-radius : 5px;
                        margin-right: 15px;
                    }
                }

                .post-content {
                    a {
                        font-size    : 14px;
                        color        : ${colors.text3};
                        display      : inline-block;
                        margin-bottom: 10px;

                        &:hover {
                            color: ${colors.yellow};
                        }

                        @media(max-width: 991px) {
                            font-size: 13px;
                            letter-spacing: 0;
                            margin-bottom: 0;
                        }
                    }

                    span {
                        display: block;
                        color  : ${colors.text2};
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 360px 0 20px;
        }
    }

    .copyright-area {
        padding   : 35px 0 38px;
        background: ${colors.copy_bg};

        .copy-text {
            p {
                color      : ${colors.text3};
                padding-top: 3px;

                i {
                    color : ${colors.yellow};
                    margin: 0 2px;
                }

                a {
                    color: ${colors.yellow};

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            @media(max-width: 767px) {
                text-align : center;
                margin-bottom: 20px;
            }
        }

        ul.social {
            li {
                a {
                    text-align: center;
                    position  : relative;

                    &:before {
                        content           : "";
                        position          : absolute;
                        border-width      : 8px 14px;
                        border-style      : solid;
                        border-top-color  : transparent;
                        border-right-color: transparent;
                        border-left-color : transparent;
                        top               : -16px;
                        left              : 0;
                        z-index           : 1;
                        transition : all 0.2s ease;
                    }

                    &:after {
                        content            : "";
                        position           : absolute;
                        border-width       : 8px 14px;
                        border-style       : solid;
                        border-right-color : transparent;
                        border-bottom-color: transparent;
                        border-left-color  : transparent;
                        bottom             : -16px;
                        left               : 0;
                        z-index            : 1;
                        transition : all 0.2s ease;
                    }

                    i {
                        font-size: 14px;
                        color    : #ffffff;
                        width    : 28px;
                    }

                    &:hover {
                        background-color: ${colors.yellow} !important;

                        &:before {
                            border-bottom-color: ${colors.yellow} !important;
                        }

                        &:after {
                            border-top-color: ${colors.yellow} !important;
                        }
                    }
                }

                &:nth-child(1) {
                    a {
                        background-color: #4267B2;

                        &:before {
                            border-bottom-color: #4267B2;
                        }

                        &:after {
                            border-top-color: #4267B2;
                        }
                    }
                }

                &:nth-child(2) {
                    a {
                        background-color: #1DA1F2;

                        &:before {
                            border-bottom-color: #1DA1F2;
                        }

                        &:after {
                            border-top-color: #1DA1F2;
                        }
                    }
                }

                &:nth-child(3) {
                    a {
                        background-color: #2867B2;

                        &:before {
                            border-bottom-color: #2867B2;
                        }

                        &:after {
                            border-top-color: #2867B2;
                        }
                    }
                }

                &:nth-child(4) {
                    a {
                        background-color: #DD1343;

                        &:before {
                            border-bottom-color: #DD1343;
                        }

                        &:after {
                            border-top-color: #DD1343;
                        }
                    }
                }

                &:nth-child(5) {
                    a {
                        background-color: #ea4c89;

                        &:before {
                            border-bottom-color: #ea4c89;
                        }

                        &:after {
                            border-top-color: #ea4c89;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                text-align : center;
            }
        }
    }
`;