import { FeaturesList } from "../../Components/Feature/FeatureList/FeatureList";
import style from "./Home.module.scss";

export function Home() {
    return (
        <main>
            <div className={style.hero}>
                <section className={style.heroContent}>
                    <h2 className={style.srOnly}>Promoted Content</h2>
                    <p className={style.subtitle}>No fees.</p>
                    <p className={style.subtitle}>No minimum deposit.</p>
                    <p className={style.subtitle}>High interest rates.</p>
                    <p className={style.text}>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section>
                <FeaturesList />
            </section>
        </main>
    );
}
