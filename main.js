var images = ["file:///Users/gayatrisharma/Pictures/Photos%20Library.photoslibrary/resources/derivatives/7/7795EAA5-31F3-480A-B9AF-942909137135_1_105_c.jpeg","https://i.file:///Users/gayatrisharma/Library/Messages/Attachments/75/05/CA71BFDD-9606-4063-898B-07884DE1E1DE/IMG_2122.jpegfile:///Users/gayatrisharma/Library/Messages/Attachments/ff/15/E152AAB0-C1F3-4242-BF72-E94B9A07BB03/IMG_1066.jpeg"];
var names = ["Fmaily Book","Oscar", "My mom", "My dad"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
