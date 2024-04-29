import { FeatureItem } from "../FeatureItem/FeatureItem";
import style from "./FeatureList.module.scss";

export function FeaturesList() {
    return (
        <section className={style.feature}>
            <FeatureItem
                src="icon-chat.png"
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
                src="icon-money.png"
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                src="icon-security.png"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money is always safe."
            />
        </section>
    );
}
