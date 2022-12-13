import { useRouter } from "next/router";

function pageServices(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {
        query: { sub_id,publisher_id,utm_source },
    } = router
    return (
        <div>
            Services Sub ID: {sub_id}<br/>
            Services Publisher ID: {publisher_id}<br/>
            utm_source: {utm_source}
        </div>
    )
}
export default pageServices;

