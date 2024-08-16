## Website Name: E_shop
### Live Link: https://e-product-shop.web.app

### How to run this project locally?

- First, clone the repo:
```js
git clone https://github.com/towhid046/e-shop-client.git
```
- Second, run the following command to install all the dependencies:
```js
npm install
```
- Finally, you need to create a ".env" or ".env.local" file in the root and also create a new project on Firebase and an Imagebb account.

The ".env" or ".env.local" file includes the flowing key with firebase and imagebb (API key) values

```js
VITE_APIKEY=<your_value>
VITE_AUTHDOMAIN=<your_value>
VITE_PROJECTID=<your_value>
VITE_STORAGEBUCKET=<your_value>
VITE_MESSAGINGSENDERID=<your_value>
VITE_APPID=<your_value>

VITE_IMGBB_API_KEY=<your_imagebb_api_key_value>

VITE_SERVER_URL=https://product-store-server-navy.vercel.app
```
### Packages Used for This Website

- **[@tanstack/react-query](https://github.com/tannerlinsley/react-query)**: v5.35.1
- **[axios](https://github.com/axios/axios)**: v1.6.8
- **[firebase](https://firebase.google.com/)**: v10.11.1
- **[react-icons](https://github.com/react-icons/react-icons)**: v5.2.1
- **[react-router-dom](https://reactrouter.com/web/guides/quick-start)**: v6.23.0
- **[react-toastify](https://github.com/fkhadra/react-toastify)**: v10.0.5
- **[sweetalert](https://github.com/t4t5/sweetalert)**: v2.1.2
