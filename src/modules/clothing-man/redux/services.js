import { sendRequestToServer } from '../../../helpers' 

export const ProductServices = {
  getProducts: getProducts
}
function getProducts(filter) {
  return sendRequestToServer({
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}/v1/product`,
  })
}