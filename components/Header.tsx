interface Props {
    top_bar_text ?: string; // ko bắt buộc
    logo : string;
}// khai báo thuộc tính
function Header({
        top_bar_text="This is top bar text",//mặc định
        logo
    }: Props){
    return(
        <>
        <div className="header">
            <div className="topbar">
                {top_bar_text}
            </div>
            This is Header
        </div>
        </>
    )
}
export default Header;