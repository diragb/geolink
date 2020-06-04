# Hey there! 👋

GeoLink is a mobile app that allows users to connect to their friends using Bluetooth, and share messages via the GeoLink grid.

This repo contains the Expo/React Native codebase.

# How does it work? 🤔

## Basically..

<img src="assets/README/slime-mold.jpg" height="300px" />

This is the Bluetooth version of internet. Every user connected to the network participates in forwarding encrypted messages from one user to another, until the message reaches its recipient who ultimately decrypts it.

[Inspiration drawn from _Physarum polycephalum_.](https://en.wikipedia.org/wiki/Slime_mold)

# OK, but how does it _really_ work? 😗

Let's take the example of three friends and one kind stranger, living in a small town:

1. 👩🏻 Alice (sender)
2. 🧔🏽 Bob
3. 👧🏼 Cinnamon (kind stranger)
4. 👸🏻 Debra (recipient)

One fine day, a hurricane strikes their state, forcing them inside their homes.

📶 No signal, 🌐 no internet, and a lot of 😖 stress.

👩🏻 Alice wants to reach out to 👸🏻 Debra somehow, but she doesn't know how to. When suddenly, she remembers that they had downloaded GeoLink a few days back in anticipation of a category V hurricane.

"Finally, someone made good use of 💙🦷," she thinks to herself, as she sends a message to 👸🏻 Debra. GeoLink immediately fetches from its cache the rough geographical coordinates of 👸🏻 Debra, which she had set-up when she first installed the app, and that GeoLink had automatically shared these coordinates + public encryption keys under-the-hood to 👩🏻 Alice and her friends.

GeoLink now looks for other users using GeoLink in 👸🏻 Debra's region (30 metres to 100 metres: depending on obstructions, Bluetooth version and other variables), and finds 🧔🏽 Bob. Turns out, he too was anxious, and wanted to communicate with his friends and family.

GeoLink then encrypts the message using 👩🏻 Alice's public key, and hashes her and 👩🏻 Alice's sender ID to maintain total anonymity. It forwards the message + details regarding the message (senderID and recipientID hash, encrypted private metadata, unencrypted metadata) to 🧔🏽 Bob, who uses the recipientID hash to see if the message is meant for him. Turns out that it's not, so he will just forward the message (GeoLink will do this on his behalf).

The GeoLink on his phone uses the recipient's (👸🏻 Debra's) geographical coordinates present in the unencrypted metadata, and looks for users with GeoLink around 🧔🏽 Bob that are in the direction of the recipient (👸🏻 Debra).

But alas! There are no users in the recipient's general direction. GeoLink keeps refreshing the region, when suddenly it finds a user at the very edge of 🧔🏽 Bob's Bluetooth coverage. Turns out, it's 👧🏼 Cinnamon, a kind stranger who turned on the GeoLink on her phone to help others.

GeoLink immediately forwards the message that Bob received, to 👧🏼 Cinnamon's phone. The GeoLink on her phone goes through all the steps of verification, and then prepares to forward the message one last time.

👸🏻 Debra finally receives the message. The GeoLink on her phone verifies the hash and confirms that the message is meant for her, after which it uses her private key to decrypt the message and show it to her.

## All's fine, but..

As you might've noticed, the whole system worked only because of 👧🏼 Cinnamon's cooperation. Had she not been there to help the network, the message could've never been delivered. This is why it is crucial for more people like her to be out there.

**The network is as strong as people make it with their faith and cooperation.**

# Talk is cheap. Show me the code. 👨🏻‍💻

<img src="assets/README/alright.gif" height="300px" />
