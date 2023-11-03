import { generatePortalLink } from "@/actions/generate-portal-link"


const ManageAccountButton = () => {
  return (
    <form action={generatePortalLink}>
        <button type="submit">
            Manage Billing
        </button>
    </form>
  )
}

export default ManageAccountButton