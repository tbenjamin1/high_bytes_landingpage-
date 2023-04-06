import "./Navbar.css";
// import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left ">
        <input type="search" placeholder="search"></input>
      </div>

      <div className="navbar__right ">
        <svg className="mx-4"  width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.99878 19V20C8.99878 20.7956 9.31485 21.5587 9.87746 22.1213C10.4401 22.6839 11.2031 23 11.9988 23C12.7944 23 13.5575 22.6839 14.1201 22.1213C14.6827 21.5587 14.9988 20.7956 14.9988 20V19M9.99878 7C9.99878 6.46957 10.2095 5.96086 10.5846 5.58579C10.9596 5.21071 11.4683 5 11.9988 5C12.5292 5 13.0379 5.21071 13.413 5.58579C13.7881 5.96086 13.9988 6.46957 13.9988 7C15.1472 7.54303 16.1262 8.38833 16.8308 9.4453C17.5355 10.5023 17.9392 11.7311 17.9988 13V16C18.074 16.6217 18.2942 17.2171 18.6416 17.7381C18.989 18.2592 19.4538 18.6914 19.9988 19H3.99878C4.54372 18.6914 5.00859 18.2592 5.35597 17.7381C5.70334 17.2171 5.92352 16.6217 5.99878 16V13C6.05834 11.7311 6.46208 10.5023 7.16673 9.4453C7.87138 8.38833 8.85037 7.54303 9.99878 7Z" stroke="#5F6980" stroke-width="1.38462" stroke-linecap="round" stroke-linejoin="round" />
          <rect x="19.7148" y="0.286133" width="6.85714" height="6.85714" rx="3.42857" fill="#E25563" />
        </svg>

      <span className="avatar  flex justify-center items-center p-2 bg-slate-400 text-slate-400">
        
      </span>
        

      </div>
    </nav>
  );
};

export default Navbar;