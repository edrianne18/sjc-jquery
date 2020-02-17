var subnet = []
var all_ip = ["192","168","11","0"]
var all_mask = ["255","255","254","0"]

for (i=0; i < all_ip.length; i++){
    subnet[i]=parseInt(all_ip[i])&parseInt(all_mask[i]);
}
    subnet