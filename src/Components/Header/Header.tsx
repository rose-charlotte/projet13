import argentBankLogo from "../../../public/argentBankLogo.png";

export function Header() {
    return (
        <nav>
            <img src={argentBankLogo} />
            <a>Sign In</a>
        </nav>
    );
}
