import styles from './resume.module.scss';

const Resumy = () => {
  return (
    <div className={styles.container}>
      <main>
        <header>
          <ul className={styles.contact}>
            <li>
              <h2 className={styles['header-name']}>kenjding</h2>
              <span><b>Gender：</b>男</span>
              <span><b>Experiences：</b>6 years</span>
              <span><b>Personal online website：</b><a href="https://juejin.im/user/5a90cf12f265da4e9957a343/posts">掘金个人主页</a></span>
              <span><b>Email: </b>kenjiding807@gmail.com</span>
              <span><b>Phone: </b>0421259261</span>
            </li>
          </ul>
        </header>
        <p style={{ clear: 'both' }}></p>
        <article className={styles.content}>
          <section className={styles.skill}>
              <h2>Summary</h2>
              <dl className={styles['skill-item']}>
                <dt>Front-End</dt>
                <dd>熟练
                  <strong>原生JavaScript</strong>，熟悉<strong>闭包</strong>原理，理解<strong>原型链的继承</strong>机制。了解<strong>DOM</strong>
                  / <strong>BOM</strong>操作，了解浏览器事件模型，了解<strong>前端性能优化</strong></dd>
                <dd>熟悉<strong>ES6</strong>的Class，Promise，async等常用新特性。</dd>
                <dd>熟悉<strong>OOP</strong>设计思想，了解js模块化思想</dd>
              </dl>
            </section>
            <section className={styles.skill}>
              <h2>Skill</h2>
              <dl className={styles['skill-item']}>
                <dt>Front-End</dt>
                <dd>Proficient in JS, TS, react, vue, and surrounding technologies</dd>
                <dd>Familiar with front-end engineering, webpack, rollup, vite, etc., as well as performance optimization of build tools</dd>
              </dl>
            </section>
          <article>

            <section className={styles.project}>
              <h2>项目经验</h2>
              <ul>
                <li>
                  <dl>
                    <dd>2019.4 - 至今<span>协同开发</span></dd>
                    <dt><span className={styles.circle}></span>油菜花迎客宝 — 微信小程序 / h5</dt>
                    <dd>
                      <span className={styles['key-point']}>react语法</span>
                      <span className={styles['key-point']}>taro框架</span>
                      <span className={styles['key-point']}>mobx</span>
                      <span className={styles['key-point']}>小程序</span>
                    </dd>
                    <dd>
                      <ul>
                        <li>参与技术选型，决定使用taro进行多端统一的开发方式，主要页面用原生小程序，其他则用h5，尽可能减少小程序审核。使用一周时间熟悉react和taro框架，达到极速开发，降低代码复杂度。</li>
                        <li>参与小程序和h5项目的开发，主要负责用户、商品、订单等核心模块的开发工作，涉及图片上传、地图定位、支付功能等。</li>
                        <li>负责小程序和h5项目的开发，参与项目需求讨论，制定开发计划，评估项目风险，根据项目进度调整开发计划。</li>
                      </ul>
                    </dd>
                  </dl>
                </li>
              </ul>
              
              <ul>
                <li>
                  <dl>
                    <dd>2019.4 - 至今<span>协同开发</span></dd>
                    <dt><span className={styles.circle}></span>油菜花迎客宝 — 微信小程序 / h5</dt>
                    <dd>
                      <span className={styles['key-point']}>react语法</span>
                      <span className={styles['key-point']}>taro框架</span>
                      <span className={styles['key-point']}>mobx</span>
                      <span className={styles['key-point']}>小程序</span>
                    </dd>
                    <dd>
                      <ul>
                        <li>Playwright e2e测试覆盖92%核心功能，使得系统更加健壮，Puppeteer实现e2e测试
                        </li>
                        <li>在serverlsss上使用puppeteer实现动态截图推送，使用rust和WebAssembly实现图片处理性能加速</li>
                        <li>参与技术选型，决定使用taro进行多端统一的开发方式，主要页面用原生小程序，其他则用h5，尽可能减少小程序审核。使用一周时间熟悉react和taro框架，达到极速开发，降低代码复杂度。</li>
                        <li>参与小程序和h5项目的开发，主要负责用户、商品、订单等核心模块的开发工作，涉及图片上传、地图定位、支付功能等。</li>
                        <li>负责小程序和h5项目的开发，参与项目需求讨论，制定开发计划，评估项目风险，根据项目进度调整开发计划。</li>
                      </ul>
                    </dd>
                  </dl>
                </li>
              </ul>
            </section>
            
          </article>
        </article>
      </main>
    </div>
  );
};

export default Resumy;
