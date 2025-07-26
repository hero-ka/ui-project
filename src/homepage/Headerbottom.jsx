import Iccon from "../Icon/Icon";
import '../csshomepage/headerbottom.css'
function HeaderBottom(){
    return(
        <>
        <div className="header-bottom-container">
           <div className="icon-brand"></div>
           <span className=" icon vercace"><Iccon icon="vercace"/></span>
           <span className=" icon zara"><Iccon icon="zara"/></span>
           <span className=" icon gucco"><Iccon icon="gucco"/></span>
           <span prada=" icon prada"><Iccon icon="prada"/></span>
           <span calvinklein=" icon calvinklein "><Iccon icon="calvinklein"/></span>
        </div>
        </>
    )
}
export default HeaderBottom;


