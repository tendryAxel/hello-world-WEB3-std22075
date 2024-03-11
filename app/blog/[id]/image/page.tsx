import { getById } from "@/utils/fetch";

type params = { params: {id: Number} }

export default ({ params } : params) => {
    return <img src={getById(Number(params.id)).image} alt="Une image" />
};