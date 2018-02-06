# learning-npm-truffle-contract

## Install

`npm install truffle-contract --save`

## Usage in the browser

```
  initContract: function() {
    $.getJSON('Adoption.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      // Set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);
});

```

Use `TruffleContract(...)` to access the contract details.

### Sources

(Github Documentation)[https://github.com/trufflesuite/truffle-contract]
