import { FeatureItem } from "../FeatureItem/FeatureItem";
import style from "./FeatureList.module.scss";

export function FeaturesList() {
    return (
        <section className={style.feature}>
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
        </section>
    );
}
