const scene = new THREE.Scene();
const loader = new THREE.GLTFLoader();
loader.load(

	// URL of the VRM you want to load
	'/models/RearAlice.vrm',

	// called when the resource is loaded
	( gltf ) => {

		// generate a VRM instance from gltf
		THREE.VRM.from( gltf ).then( ( vrm ) => {

			// add the loaded vrm to the scene
			scene.add( vrm.scene );

			// deal with vrm features
			console.log( vrm );

		} );

	},

	// called while loading is progressing
	( progress ) => console.log( 'Loading model...', 100.0 * ( progress.loaded / progress.total ), '%' ),

	// called when loading has errors
	( error ) => console.error( error )

);