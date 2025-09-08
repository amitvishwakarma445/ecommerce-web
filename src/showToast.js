export function showToast(operation, id) {
    // create toast Element
    const div = document.createElement("div");
    div.className = "toast";

    // set message based on operation
    let message = "";
    if (operation === "Add") {
        message = `✅ Item with Id ${id} added successfully`;
    }
    else if (operation === "Remove") {
        message = `❌ Item with Id ${id} removed successfully`;
    }
    else {
        message = `⚠️ Unknown operation for item ${id}`;
    }

    div.textContent = message;

    // append to body
    document.body.appendChild(div);

    // remove after 3 secong
    setTimeout(()=>{
        div.remove();
    }, 3000);
}