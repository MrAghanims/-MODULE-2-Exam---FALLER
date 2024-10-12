import * as THREE from 'three';

const scene = new THREE.Scene();
const aspect = window.innerWidth/window.innerHeight;
const camera = new THREE.OrthographicCamera(-7 * aspect, 7 * aspect, 7, -7, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color ( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const room = createRoom();
const dresser = createDresser();
const Window = createWindow();
const light = new THREE.HemisphereLight( 0xe3c8a3 , 0x365f75, 1);
const ambientLight = new THREE.AmbientLight( 0x909040 );
const chair = createGamingChair();
const bed = createBed();
const laptop = createLaptop();
const door = createDoor();

room.position.set(1.5,0,1.5);
light.position.set(0.5,1.5,0);
Window.position.set(-2.1,2.25,-3.35);
dresser.position.set(-2.4,0.25,-1.1);
chair.position.set(-.75,-.3,-1.2);
bed.position.set(3,0,-0.6);
laptop.position.set(-2.5,1.75,-1.1);
door.position.set(-3.35,1.4,5.3);



scene.add(room);
scene.add(ambientLight);
scene.add(light);
scene.add(Window);
scene.add(dresser);
scene.add(chair);
scene.add(bed);
scene.add(laptop);
scene.add(door);

camera.position.set(7,7,7);
camera.lookAt(0,0,0);

function animate() {
    requestAnimationFrame(animate);

	if ( scene ) {
        scene.rotation.y = Math.sin(Date.now() * 0.0002) * Math.PI * 0.1;
    }
	renderer.render( scene, camera );

}
animate();

function createRoom(){
    const room = new THREE.Group();

    // Materials
    const floorMaterial = new THREE.MeshToonMaterial({ color: 0x834333 })
    const wallMaterial = new THREE.MeshToonMaterial({color:0x6495ED })

    // Geometries
    const floorGeometry = new THREE.BoxGeometry(10,0.1,10);
    const leftWallGeometry = new THREE.BoxGeometry(0.1,5.5,10,1);
    const rightWallGeometry = new THREE.BoxGeometry(10,5.5,0.1,1);

    // Meshes
    const floor = new THREE.Mesh(floorGeometry,floorMaterial);
    const leftWall = new THREE.Mesh(leftWallGeometry,wallMaterial);
    const rightWall = new THREE.Mesh(rightWallGeometry,wallMaterial);

    // Positions
    floor.position.y = -1
    leftWall.position.set(-4.95,1.74,0);
    rightWall.position.set(0,1.74,-4.95);

    room.add(floor, leftWall, rightWall);

    return room;
}

function createWindow(){
    const window = new THREE.Group();

    // Materials
    const windowFrameMaterial = new THREE.MeshToonMaterial({color:0xa9afb8})
    const windowGlassMaterial = new THREE.MeshToonMaterial({color: 0xabd1f5})

    // Geometries
    const windowSideGeometry = new THREE.BoxGeometry(0.1,3,0.1);
    const windowTopGeometry = new THREE.BoxGeometry(0.1,0.1,2);
    const windowGlassGeometry = new THREE.PlaneGeometry(2,3);

    // Meshes
    const windowLeftSide = new THREE.Mesh(windowSideGeometry, windowFrameMaterial);
    const windowRightSide = new THREE.Mesh(windowSideGeometry, windowFrameMaterial);
    const windowTopSide = new THREE.Mesh(windowTopGeometry,windowFrameMaterial);
    const windowBottomSide = new THREE.Mesh(windowTopGeometry,windowFrameMaterial);
    const windowInnerVertical = new THREE.Mesh(windowSideGeometry, windowFrameMaterial);
    const windowInnerHorizontal = new THREE.Mesh(windowTopGeometry,windowFrameMaterial);
    const windowGlass = new THREE.Mesh(windowGlassGeometry, windowGlassMaterial);

    // Positions
    windowInnerHorizontal.position.set(0,0,-0.5);
    windowInnerVertical.position.set(0,0,-0.5);
    windowRightSide.position.z = -1.5;
    windowLeftSide.position.z = .5;
    windowTopSide.position.set(0,1.45,-0.5);
    windowBottomSide.position.set(0,-1.45,-0.5);
    windowGlass.rotation.y = 1.6;
    windowGlass.position.z = -.5;

    window.add(windowGlass, windowLeftSide, windowRightSide, windowTopSide, windowBottomSide, windowInnerHorizontal, windowInnerVertical);

    // Curtains

    // Materials
    const windowRodMaterial = new THREE.MeshToonMaterial({color:0x524134})
    const windowCurtainMaterial = new THREE.MeshToonMaterial({color: 0x00A36C})

    //Geometries
    const windowRodGeometry = new THREE.CylinderGeometry(0.075,0.075,3);
    const windowCurtainGeometry = new THREE.BoxGeometry(.05,4.2,1);

    //Meshes
    const windowRod = new THREE.Mesh(windowRodGeometry, windowRodMaterial);
    const windowCurtain1 = new THREE.Mesh(windowCurtainGeometry, windowCurtainMaterial);
    const windowCurtain2 = new THREE.Mesh(windowCurtainGeometry, windowCurtainMaterial);

    // Positions
    windowRod.position.set(0,1.75,-.5);
    windowRod.rotation.x = 1.57;

    windowCurtain1.position.set(.05,-.2,.5);
    windowCurtain2.position.set(.05,-.2,-1.5);

    window.add(windowRod, windowCurtain1, windowCurtain2);
    
    window.rotation.y = -Math.PI / 2;
    return window;
}

function createDresser(){
    const dresser = new THREE.Group();
    
    // Materials
    const dresserBodyMaterial = new THREE.MeshToonMaterial({color: 0x694127});
    const dresserLegMaterial = new THREE.MeshToonMaterial({color: 0x6e452a});

    // Geometries
    const dresserBodyGeometry = new THREE.BoxGeometry(3.5,2,1.5);
    const dresserLegGeometry = new THREE.BoxGeometry(.25,2.2,.25);
    const dresserTopGeometry = new THREE.BoxGeometry(4,.25,2);

    // Meshes
    const dresserBody = new THREE.Mesh(dresserBodyGeometry,dresserBodyMaterial);
    const dresserLeg1 = new THREE.Mesh(dresserLegGeometry, dresserLegMaterial);
    const dresserLeg2 = new THREE.Mesh(dresserLegGeometry, dresserLegMaterial);
    const dresserLeg3 = new THREE.Mesh(dresserLegGeometry, dresserLegMaterial);
    const dresserLeg4 = new THREE.Mesh(dresserLegGeometry, dresserLegMaterial);
    const dresserTop = new THREE.Mesh(dresserTopGeometry, dresserLegMaterial);

    // Positions
    dresserLeg1.position.set(1.75,-.125,.75);
    dresserLeg2.position.set(1.75,-.125,-.75);
    dresserLeg3.position.set(-1.75,-.125,.75);
    dresserLeg4.position.set(-1.75,-.125,-.75);
    dresserTop.position.y = .85


    dresser.add(dresserBody,dresserLeg1,dresserLeg2,dresserLeg3,dresserLeg4, dresserTop);
    
    dresser.rotation.y = -Math.PI / 2;
    return dresser;
}

function createGamingChair() {
    const chair = new THREE.Group();
    const chairMaterial = new THREE.MeshStandardMaterial({ color: 0xFAF9F6, roughness: 0.5, metalness: 0.1 });

    // Geom
    const seatGeometry = new THREE.BoxGeometry(1.4, 0.2, 1.15);
    const backrestGeometry = new THREE.BoxGeometry(1.4, 1.6, 0.1);
    const legGeometry = new THREE.CylinderGeometry(0.075, 0.075, 1.3, 8);
    const seat = new THREE.Mesh(seatGeometry, chairMaterial);
    

    //Mesh
    const backrest = new THREE.Mesh(backrestGeometry, chairMaterial);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
    const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
    const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
    const backRightLeg = new THREE.Mesh(legGeometry, legMaterial);

    // Pos
    seat.position.y = .5;
    backrest.position.set(0, 1.35, -0.6);
    frontLeftLeg.position.set(-0.6, -.125, -0.5);
    frontRightLeg.position.set(0.6, -.125, -0.5);
    backLeftLeg.position.set(-0.6, -.125, 0.5);
    backRightLeg.position.set(0.6, -.125, 0.5);

    chair.add(seat, backrest, frontLeftLeg, frontRightLeg, backLeftLeg, backRightLeg);
    
    chair.rotation.y = -Math.PI / 2;
    return chair;
}

function createBed(){
    const bed = new THREE.Group();

    // Materials
    const bedFrameMaterial = new THREE.MeshToonMaterial({color: 0x734f35})
    const bedStorageMaterial = new THREE.MeshToonMaterial({color: 0x6e452a})
    const bedClothMaterial = new THREE.MeshToonMaterial({color: 0xFFFDD0});
    // const bedBlanketMaterial = new THREE.MeshToonMaterial({color: 0xb36e2e});

    // Geometries
    const bedFrameGeometry = new THREE.BoxGeometry(3.5,.5,5);
    const bedBackrestGeometry = new THREE.BoxGeometry(3.5,2.5,.25);
    const bedFootrestGeometry = new THREE.BoxGeometry(3.5, 1, .25);
    const bedStorageGeometry = new THREE.BoxGeometry(3,.5,2.5);
    const bedMattressGeometry = new THREE.BoxGeometry(2.7, 0.2, 4.9);
    const bedPillowGeometry = new THREE.BoxGeometry(1.4, 0.2, 1.15);
    // const bedBlanketGeometry = new THREE.BoxGeometry(3.55, .5, 4, .15, 3);
    // const bedBlanketHemGeometry = new THREE.BoxGeometry(3.8, .5, .8, .15, 3);

    // Meshes
    const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);
    const bedBackrest = new THREE.Mesh(bedBackrestGeometry, bedFrameMaterial);
    const bedFootrest = new THREE.Mesh(bedFootrestGeometry, bedFrameMaterial);
    const bedStorage1 = new THREE.Mesh(bedStorageGeometry,bedStorageMaterial)
    const bedStorage2 = new THREE.Mesh(bedStorageGeometry,bedStorageMaterial)
    const bedMattress = new THREE.Mesh(bedMattressGeometry, bedClothMaterial)
    const bedPillow = new THREE.Mesh(bedPillowGeometry, bedClothMaterial);
    // const bedBlanket = new THREE.Mesh(bedBlanketGeometry, bedBlanketMaterial);
    // const bedBlanketHem = new THREE.Mesh(bedBlanketHemGeometry, bedClothMaterial);

    // Positions
    bedBackrest.position.set(0,.2,-2.5);
    bedFootrest.position.set(0,-.25,2.5);
    bedStorage1.position.set(.19,-.5,1.25);
    bedStorage2.position.set(.4,-.5,-1.25);
    bedMattress.position.set(0,.2,0.15);
    bedPillow.position.set(0,.3,-1.9);
    // bedBlanket.position.set(0,.1,.55);
    // bedBlanketHem.position.set(0,.2,-1);

    bed.add(bedFrame,bedBackrest, bedFootrest, bedStorage1, bedStorage2,bedMattress,bedPillow);

    return bed;

}

function createLaptop(){
    const laptop = new THREE.Group();

    // Materials
    const laptopMaterial = new THREE.MeshToonMaterial({color: 0x646262});
    const keyboardMaterial = new THREE.MeshToonMaterial({color: 0x545454});

    // Geometries
    const laptopMonitorGeometry = new THREE.BoxGeometry(1.5,1,0.1);
    const laptopGeometry = new THREE.BoxGeometry(1.5,0.1,1);
    const keyboardGeometry =  new THREE.BoxGeometry(1.25,0.1,0.5);

    // Meshes
    const laptopBody = new THREE.Mesh(laptopGeometry, laptopMaterial);
    const laptopMonitor = new THREE.Mesh(laptopMonitorGeometry, laptopMaterial);
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);

    // Position
    laptopMonitor.rotation.x = -0.4;
    laptopBody.position.set(0,-0.5,-0.3);
    keyboard.position.set(0,-0.45,-0.25);

    laptop.add(laptopBody,laptopMonitor,keyboard);
    laptop.rotation.y = -Math.PI / 2;
    return laptop;

}

function createDoor(){
    const door = new THREE.Group();

    // Materials
    const doorFrameMaterial = new THREE.MeshToonMaterial({color:0x343434});
    const doorBodyMaterial = new THREE.MeshToonMaterial({color: 0xFFBF00});
    const doorFillMaterial = new THREE.MeshToonMaterial({color: 0x343434});

    // Geometries
    const doorSidesGeometry = new THREE.BoxGeometry(.2,5.3,.15);
    const doorTopGeometry =  new THREE.BoxGeometry (2.45, .2, .15);
    const doorBodyGeometry = new THREE.BoxGeometry(2,5,.15);
    const doorKnobGeometry = new THREE.SphereGeometry(.125,.125,.125);
    const doorFillGeometry = new THREE.PlaneGeometry(2,5);

    // Meshes
    const doorSide1 = new THREE.Mesh(doorSidesGeometry, doorFrameMaterial);
    const doorSide2 = new THREE.Mesh(doorSidesGeometry, doorFrameMaterial);
    const doorBody = new THREE.Mesh(doorBodyGeometry, doorBodyMaterial);
    const doorTop = new THREE.Mesh(doorTopGeometry, doorFrameMaterial);
    const doorKnob = new THREE.Mesh(doorKnobGeometry, doorFrameMaterial); 
    const doorFill = new THREE.Mesh(doorFillGeometry, doorFillMaterial);
    
    // Positions
    doorSide2.position.x = 2.25;
    doorTop.position.set(1.12,2.6,0);
    doorBody.position.set(1.1,0,0.1);
    doorBody.rotation.y = 22
    doorKnob.position.set(1.75,-.2,0.2);
    doorFill.position.x = 1.25;

    door.add(doorSide1,doorSide2,doorTop,doorBody, doorKnob, doorFill);
    door.rotation.y = Math.PI / 2;
    return door;
}