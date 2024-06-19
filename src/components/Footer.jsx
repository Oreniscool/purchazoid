import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className="h-fit bg-secondary-200 p-2 flex gap-2 absolute left-0 bottom-0 w-full justify-center items-center z-10">
      <a href="https://github.com/Oreniscool">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-white text-3xl hover:scale-110 hover:text-accent-500 transition-all"
        />
      </a>
      <h4 className="text-white">Made with 💖 by Qitiya!</h4>
    </div>
  );
}
export default Footer;
