  0. Install ionic globally
``` sh
npm i -g ionic
```

  1. Install firebase globally
``` sh
npm i -g firebase-tools
```

2. Go to folder where you will create new ionic project and run:
``` sh
ionic start myNewProject
```

3. cd myNewProject

4. Install ionic Lab
``` sh
npm i @ionic/lab --save
```

5. Install angularFire & firebase
``` sh
npm i @angular/fire firebase --save
```

6. Fix RXJS Error
``` sh
npm i rxjs@6 rxjs-comat@6 --save
```

7. Create Project in firebase
``` sh
npm i rxjs@6 rxjs-comat@6 --save
```

8. (Optional) Change to lazy loading
  - Delete page 
  - Create new one 
  - ``` ionic g page home```
  - Remove references (app.module & app.component)

9. Uncomment service worker in `index.html`

10. Config firebase
  - ```firebase login ```
  - ```firebase init ```

11. Build production 
  - * If there is building error run
    - ```npm i @angular-devkit/build-optimizer --save```
  - ```ionic build --prod --optimize```
  - Deploy ```firebase deploy```

12. Create One Signal project
  - Change (icon, name, add files) `manifest.json`