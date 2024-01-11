#### Create a react app named "my-react-app" using vite

```sh
create vite@latest my-react-app -- --template react
```

#### Enter into the project folder

```sh
cd frontend
```

#### Install react and tailwind with autoprefixer

```sh
npm install -D tailwindcss postcss autoprefixer
```

#### To install react-router-dom, firebase, axios, sweetalert2, react-toastify, react-icons

```sh
npm i react-router-dom firebase axios sweetalert2 react-toastify react-icons
```

### Install preline ui

```sh
npm i preline
```

### Add the path to Preline UI JavaScript files in your 'tailwind.config.js' file

```sh
// tailwind.config.js
module.exports = {
  content: [
      './node_modules/preline/preline.js',
  ],
  plugins: [
      require('preline/plugin'),
  ],
}
```

### Add code that reinitializes the components every time when app is mounted or page was changed

```sh
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "preline/preline";

const MainLayout = () => {
  const loaction = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;

```
