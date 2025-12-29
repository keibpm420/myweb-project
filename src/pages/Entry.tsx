import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
    return (
        <main className="entry u-ptb">
            <div className="l-container-s">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-level1-english--secondary">ENTRY</span>
                    <h2 className="c-title-level1">エントリーフォーム</h2>
                </div>

                <div className="entry-note">
                    <p className="entry-note-text">
                        <span>必要事項を入力し、確認した後「送信する」をクリックしてください。</span>
                        <span>※「必須」マークがある箇所は必ず入力してください。</span>
                    </p>

                    <p className="entry-note-text02">※入力内容の確認画面は表示されませんのでご注意ください。</p>
                </div>

                <form method="" action="" className="entry-form">
                    <div className="entry-form-inner">
                        <div className="entry-form-input">
                            <label className="c-form-label" htmlFor="last-name">
                                <span className="c-form-label-name">姓</span>
                                <span className="c-form-label-require">必須</span>
                            </label>
                            <input required type="text" id="last-name" className="c-form-text" placeholder="田中" />
                        </div>

                        <div className="entry-form-input">
                            <label className="c-form-label" htmlFor="first-name">
                                <span className="c-form-label-name">名</span>
                                <span className="c-form-label-require">必須</span>
                            </label>
                            <input type="text" id="first-name" className="c-form-text" placeholder="太郎" required />
                        </div>
                    </div>

                    <div className="entry-form-input">
                        <label className="c-form-label" htmlFor="email">
                            <span className="c-form-label-name">メールアドレス</span>
                            <span className="c-form-label-require">必須</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="c-form-text"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>

                    <div className="entry-form-input">
                        <label className="c-form-label" htmlFor="tel">
                            <span className="c-form-label-name">電話番号</span>
                            <span className="c-form-label-require">必須</span>
                        </label>
                        <input type="tel" id="tel" className="c-form-text" placeholder="000-1111-2222" required />
                    </div>

                    <div className="entry-form-input">
                        <label className="c-form-label" htmlFor="job">
                            <span className="c-form-label-name">希望職種</span>
                            <span className="c-form-label-require">必須</span>
                        </label>

                        <select className="c-form-select" id="job" name="job" required>
                            <option value="">以下からお選びください</option>
                            <option value="sales">営業</option>
                            <option value="consultant">コンサルタント</option>
                            <option value="marketer">マーケター</option>
                            <option value="director">ディレクター</option>
                            <option value="frontend">フロントエンドエンジニア</option>
                            <option value="backend">バックエンドエンジニア</option>
                            <option value="designer">デザイナー</option>
                        </select>
                    </div>

                    <div className="entry-form-input">
                        <label className="c-form-label" htmlFor="location">
                            <span className="c-form-label-name">勤務希望地</span>
                            <span className="c-form-label-require">必須</span>
                        </label>

                        <select className="c-form-select" id="location" name="location" required>
                            <option value="">以下からお選びください</option>
                            <option value="tokyo">東京都</option>
                            <option value="hokkaido">北海道</option>
                            <option value="miyagi">宮城県</option>
                            <option value="hiroshima">広島県</option>
                            <option value="fukuoka">福岡県</option>
                            <option value="none">希望なし</option>
                        </select>
                    </div>

                    <div className="entry-form-input">
                        <div className="entry-form-file">
                            <div className="c-form-label">
                                <span className="c-form-label-name">職務経歴書</span>
                                <span className="c-form-label-require">必須</span>
                            </div>
                            <p className="c-form-label-note">（PDF、DOCX、XLSX等の書類ファイルのみ、10MB以下）</p>
                        </div>

                        <label className="c-form-file-wrap">
                            ファイルを選択
                            <input type="file" className="c-form-file" accept=".pdf,.doc,.docx,.xls,.xlsx" required />
                        </label>
                    </div>

                    <div className="entry-form-input">
                        <div className="entry-form-file">
                            <div className="c-form-label">
                                <span className="c-form-label-name">履歴書</span>
                                <span className="c-form-label-require">必須</span>
                            </div>
                            <p className="c-form-label-note">（PDF、DOCX、XLSX等の書類ファイルのみ、10MB以下）</p>
                        </div>

                        <label className="c-form-file-wrap">
                            ファイルを選択
                            <input type="file" className="c-form-file" accept=".pdf,.doc,.docx,.xls,.xlsx" required />
                        </label>
                    </div>

                    <div className="entry-form-input">
                        <span className="c-form-label-name">備考</span>
                        <textarea name="remarks" id="" className="c-form-textarea"></textarea>
                    </div>

                    <div className="entry-form-privacy">
                        <input type="checkbox" name="privacy" id="privacy" required />
                        <label htmlFor="privacy">
                            <Link to="/privacy-policy">個人情報の取扱い</Link>
                            <span>について同意する</span>
                        </label>
                    </div>

                    <div className="entry-form-button">
                        <button type="submit">送信する</button>
                    </div>

                    <p className="entry-form-note">※入力内容の確認画面は表示されませんのでご注意ください。</p>

                    <div className="c-link--center">
                        <Link className="c-link" to="/">
                            トップへ戻る
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Entry;
