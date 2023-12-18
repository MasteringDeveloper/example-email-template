const mailbox = document.getElementById("mailbox");
const offcanvasPreviewElem = document.getElementById("offcanvas-preview");
const offcanvasPreview = new bootstrap.Offcanvas(offcanvasPreviewElem);

document.addEventListener('DOMContentLoaded', function () {
    // Get the "New Message" link
    var newMessageLink = document.querySelector('#menu .nav-link');

    // Get the modal
    var newMailModal = new bootstrap.Modal(document.getElementById('new-mail'));

    // Attach a click event listener to the "New Message" link
    newMessageLink.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Show the modal
        newMailModal.show();
    });

    // Add additional JavaScript logic as needed
    const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        replyButton.classList.add("btn", "btn-primary", "me-2");
        replyButton.addEventListener("click", () => {
            // Add logic for handling reply action
            console.log("Reply clicked");
        });
});

mailbox.addEventListener("click", evnt => {
    console.log(evnt.target)
    const parent = evnt.target.parentNode;

    const sender = parent.querySelector(".sender").innerHTML;
    const subject = parent.querySelector(".subject").innerHTML;
    const message = parent.querySelector("p:nth-child(3)").innerHTML;

    offcanvasPreviewElem.querySelector(".sender").innerHTML = sender;
    offcanvasPreviewElem.querySelector(".subject").innerHTML = subject;
    offcanvasPreviewElem.querySelector("p:nth-child(3)").innerHTML = message;

    if(parent.classList.contains("email-message") && window.innerWidth <= 992){
        offcanvasPreview.show();
    }
});

function createInboxItem(email) {
    const template = document.getElementById("email-message-template");
    const newMailboxItem = template.content.firstElementChild.cloneNode(true);

    newMailboxItem.querySelector(".sender").innerHTML = email.sender;
    newMailboxItem.querySelector(".subject").innerHTML = email.subject;
    newMailboxItem.querySelector("p:nth-child(3)").innerHTML = email.message;

    mailbox.querySelector("div").append(newMailboxItem);
};

var inboxItems = [
    {
        sender:     "Michael Scott",
        subject:    "Love or Fear ",
        message:    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
    },
    {
        sender:     "Dwight Schrutte",
        subject:    "Identity Theft",
        message:    "Identity theft is not a joke, Jim! Millions of families suffer every year."
    },
    {
        sender:     "Jim Halpert",
        subject:    "Battlestar Galactica",
        message:    "Question, what kind of bear is best? False, Black Bear. Fact Bears eat beets. Bears, beets, Battlestar Galactica!"
    },
    {
        sender:     "Pam Beesley",
        subject:    "The Dundies",
        message:    "You know what they say about a car wreck, where it’s so awful you can’t look away? The Dundies are like a car wreck that you want to look away from, but you have to stare at it because your boss is making you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eligendi vero. Quos labore voluptas animi esse quas nemo in aliquid maiores officia eum sapiente quae distinctio veniam ducimus, iste non."
    },
    {
        sender:     "Phyliss Vance",
        subject:    "Blackmail?",
        message:    "Oh, I don’t think it’s blackmail. Angela just does what I ask her to do, so I won’t tell everyone that she’s cheating on Andy with Dwight. I think for it to be blackmail, it would have to be a formal letter.orem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro nobis rem consequuntur maxime sunt eveniet deserunt iure commodi nesciunt laboriosam corporis quae beatae asperiores, autem, aperiam id animi. Necessitatibus!"
    },
    {
        sender:     "Oscar Martinez",
        subject:    "The real crime",
        message:    "Well, this is what happened. Ryan’s big project was the website, which wasn’t doing so well. So Ryan, to give the impression of sales, recorded them twice. Once as office sales and once in the website sales, which is what we refer to in the business as 'misleading the shareholders.' Another good term is 'fraud.' The real crime, I think, was the beard"
    }
    
]

inboxItems.forEach(item => createInboxItem(item));
