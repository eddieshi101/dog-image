async function generate(){

    try{

        const url = "https://dog.ceo/api/breeds/image/random";

        const response = await fetch(url);

        const img = await response.json();

        document.getElementById("dog_image").src = img.message;
        

    }

    catch (error){

        console.error("Sorry there was an error: ", error);

    }

}
