import React from "react";
import Button from "../Button";
import Icon from "../Icon";

const Mv = () => {
    return (
        <div className="top-mv" id="mv">
            <div className="l-container">
                <div className="top-mv-inner">
                    <div className="top-mv-head">
                        <div className="top-mv-wrap">
                            <p className="top-mv-text">
                                就活について...悩んでいませんか？
                            </p>
                            <p className="top-mv-text02">
                                <span>就職活動のノウハウを</span>
                                <span>あなたに伝えます</span>
                            </p>
                            <ul className="top-mv-list">
                                <li className="top-mv-item">個別面談</li>
                                <li className="top-mv-item">面接準備</li>
                                <li className="top-mv-item">
                                    卒業生インタビュー
                                </li>
                                <li className="top-mv-item">就職サポート</li>
                                <li className="top-mv-item">キャリア支援</li>
                                <li className="top-mv-item">履歴書対策</li>
                            </ul>
                        </div>

                        <div className="top-mv-button-wrap">
                            <Button className="c-button" to="/" type="Link">
                                相談してみる
                                <Icon className="c-icon c-icon--arrow c-icon--position" />
                            </Button>

                            <Button
                                className="c-button c-button--white"
                                href="https://www.tec-scs.jp/"
                                type="a"
                            >
                                求人情報を見る
                                <Icon className="c-icon c-icon--arrow c-icon--blue c-icon--position" />
                            </Button>
                        </div>
                    </div>

                    <div className="top-mv-image">
                        <img
                            src="/img/img-support04.jpg"
                            width="530"
                            height="471"
                            alt=""
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mv;
