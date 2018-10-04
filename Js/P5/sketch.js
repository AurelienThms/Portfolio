angle = 0;
var larg = screen.width;
var haut = screen.height;
if (larg > 600) {
    larg = window.innerWidth;
    haut = window.innerHeight;


    preload = function () {
        obj1 = loadModel('obj/cursorIn.obj');
        obj2 = loadModel('obj/cursorOut.obj');
        obj5 = loadModel('obj/camera.obj');
        obj6 = loadModel('obj/screen.obj');
        obj7 = loadModel('obj/play.obj');

    };

    setup = function () {
        console.log(larg);

        var canvas = createCanvas(larg, haut, WEBGL);
        canvas.parent('main');
        directionalLight(255, 255, 255, 100, 100, 50);
        directionalLight(255, 255, 255, -100, -100, 50);
        directionalLight(255, 255, 255, 0, 0, -10);
    };

    draw = function () {


        push();
        background(0, 0);
        rotateX(PI);
        noStroke();
        scale(4);
        rotateY(2 * PI / 2.5);
        rotateX(PI / 2);
        rotateZ(angle);
        specularMaterial(15);
        model(obj1);
        ambientMaterial(255);
        model(obj2);
        pop();


        push();
        translate(0, -haut / 3, 0);
        rotateZ(PI);
        noStroke();
        scale(3);
        specularMaterial(15);
        rotateY(angle / 2);
        model(obj5);
        ambientMaterial(255);
        model(obj6);
        pop();


        push();
        translate(0, haut / 3, 0);
        noStroke();
        scale(3.5, 4, 4);
        rotateZ(PI / 2);
        rotateX(PI / 2);
        rotateX(angle);
        specularMaterial(15);
        model(obj7);
        pop();

        angle += 0.05;

    };
} else {
    window.onload = function () {

        var mobile = document.querySelectorAll("#menu>div");
        for (var i = 0; i < mobile.length; i++) {
            var bou = mobile[i];
            bou.classList.add('out')
        }
    };

    larg = screen.width;
    haut = screen.height;


    preload = function () {
        obj1 = loadModel('obj/cursorIn.obj');
        obj2 = loadModel('obj/cursorOut.obj');
        obj5 = loadModel('obj/camera.obj');
        obj6 = loadModel('obj/screen.obj');
        obj7 = loadModel('obj/play.obj');

    };

    setup = function () {

        createCanvas(larg, haut / 2, WEBGL);
        directionalLight(255, 255, 255, 100, 100, 50);
        directionalLight(255, 255, 255, -100, -100, 50);
        directionalLight(255, 255, 255, 0, 0, -10);
    };

    draw = function () {


        push();
        translate(-larg / 5, haut / 8, 0);
        background(0, 0);
        rotateX(PI);
        noStroke();
        scale(4);
        rotateY(2 * PI / 2.5);
        rotateX(PI / 2);
        rotateZ(angle/1.5);
        specularMaterial(15);
        model(obj1);
        ambientMaterial(255);
        model(obj2);
        pop();


        push();
        translate(larg / 5, -haut / 8, 0);
        rotateZ(PI);
        noStroke();
        scale(3);
        specularMaterial(15);
        rotateY(angle / 2);
        model(obj5);
        ambientMaterial(255);
        model(obj6);
        pop();
        angle += 0.05;

    }
}