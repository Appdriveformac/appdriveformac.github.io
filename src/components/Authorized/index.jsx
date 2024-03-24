import Authorized from './Authorized';
import check from './CheckPermissions';
import Secured from './Secured';
import renderAuthorize from './renderAuthorize';
Authorized.Secured = Secured;
Authorized.check = check;
const RenderAuthorize = renderAuthorize(Authorized);
export default RenderAuthorize;
