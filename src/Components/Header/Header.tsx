import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import argentBankLogo from "/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <nav>
            <img src={argentBankLogo} />
            <FontAwesomeIcon icon={faUserCircle} />
            <a>Sign In</a>
        </nav>
    );
}
