import save from '../assets/save.svg';

function Header() {
  return (
    <header>
      <h1>EPİAŞ</h1>
      <div className="right-block">
        <div className="work-space">
          <img className="save-icon" src={save} alt="save" />
          <p>Çalışma Alanı 1</p>
        </div>
        <div className="user-profile">
          <p className="user-icon">JD</p>
          <p>
            Merhaba, <b>John</b>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
