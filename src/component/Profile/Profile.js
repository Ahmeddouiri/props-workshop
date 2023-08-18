import Name from "../Name/Name";
import Image from "../Image/Image";
function Profile({name,image}) {
    return (
<>
<h1>Profile</h1>
<Name name={name} />
<Image image={image}/>
</>
    )
}
export default Profile;