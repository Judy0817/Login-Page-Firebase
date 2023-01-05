function upload(){
        var image=document.getElementById("image").files[0];
        var imageName=image.name;
        var storageRef=firebase.storage().ref('images/'+imageName0);
        var uploadTask=storageRef.put(image);

        uploadTask.on('state_changed',function(snapshot){
            var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log("upload is "+progress +"done");
        },function(){
            uploadTask.snapshot.ref.getDownLoadURL().then(function(downloadURL){
                console.log(downloadURL);
            });
        
        });
}