// Is there an injected web3 instance?
if (typeof web3 !== 'undefined') {
    Web3Provider = web3.currentProvider;
} else {
    // If no injected web3 instance is detected, fall back to Ganache
    Web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(Web3Provider);

// Get Contract
$.getJSON('Friend.json', function (data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    var FriendArtifact = data;
    FriendContract = TruffleContract(FriendArtifact);

    // Set the provider for our contract
    FriendContract.setProvider(App.web3Provider);
});


