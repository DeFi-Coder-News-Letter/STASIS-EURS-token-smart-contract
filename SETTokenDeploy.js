/*
 * Deployment script for SET Token Smart Contract.
 * Copyright © 2018 by ABDK Consulting.
 * Author: Mikhail Vladimirov <mikhail.vladimirov@gmail.com>
 */

if (!web3.eth.contract ([{"constant":false,"inputs":[],"name":"freezeTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"unfreezeTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burnTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"createTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_newFeeCollector","type":"address"}],"name":"setFeeCollector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"delegatedTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_feeCollector","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]).new (
  feeCollector,
  {from: web3.eth.accounts[0], data: "0x6060604052341561000f57600080fd5b604051602080610f948339810160405280805160028054600160a060020a03338116600160a060020a031992831617909255600380549290931691161790555050610f358061005f6000396000f3006060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630150246081146100ea57806306fdde03146100ff578063095ea7b31461018957806313af4035146101bf57806318160ddd146101de57806323b872dd14610203578063313ce5671461022b57806331c420d4146102545780636d1b229d1461026757806370a082311461027d5780637e1f2bb81461029c57806395d89b41146102b2578063a42dce80146102c5578063a9059cbb146102e4578063c97e848014610306578063dd62ed3e1461033a575b600080fd5b34156100f557600080fd5b6100fd61035f565b005b341561010a57600080fd5b6101126103c2565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561014e578082015183820152602001610136565b50505050905090810190601f16801561017b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561019457600080fd5b6101ab600160a060020a0360043516602435610403565b604051901515815260200160405180910390f35b34156101ca57600080fd5b6100fd600160a060020a0360043516610470565b34156101e957600080fd5b6101f16104ba565b60405190815260200160405180910390f35b341561020e57600080fd5b6101ab600160a060020a03600435811690602435166044356104c0565b341561023657600080fd5b61023e6105e5565b60405160ff909116815260200160405180910390f35b341561025f57600080fd5b6100fd6105ea565b341561027257600080fd5b6101ab600435610648565b341561028857600080fd5b6101f1600160a060020a0360043516610720565b34156102a757600080fd5b6101ab60043561073b565b34156102bd57600080fd5b6101126107f7565b34156102d057600080fd5b6100fd600160a060020a0360043516610838565b34156102ef57600080fd5b6101ab600160a060020a0360043516602435610882565b341561031157600080fd5b6101ab600160a060020a036004351660243560443560643560ff6084351660a43560c435610931565b341561034557600080fd5b6101f1600160a060020a0360043581169060243516610c40565b60025433600160a060020a0390811691161461037a57600080fd5b60055460ff1615156103c0576005805460ff191660011790557f615acbaede366d76a8b8cb2a9ada6a71495f0786513d71aa97aaf0c3910b78de60405160405180910390a15b565b6103ca610ed7565b60408051908101604052601181527f537461626c65204575726f20546f6b656e0000000000000000000000000000006020820152905090565b600160a060020a03338116600081815260016020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b60025433600160a060020a0390811691161461048b57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60045490565b60055460009060ff16156104d6575060006105de565b600160a060020a0380851660009081526001602090815260408083203390941683529290522054821180159061053e5750600160a060020a03808516600090815260016020908152604080832033909416835292905220546105389083610c6b565b6101f411155b80156105625750600160a060020a0384166000908152602081905260409020548211155b80156105925750600160a060020a03841660009081526020819052604090205461058c9083610c6b565b6101f411155b156105da576105a2848484610c7d565b15156105ad57600080fd5b6003546105c7908590600160a060020a03166101f4610c7d565b15156105d257600080fd5b5060016105de565b5060005b9392505050565b600290565b60025433600160a060020a0390811691161461060557600080fd5b60055460ff16156103c0576005805460ff191690557f2f05ba71d0df11bf5fa562a6569d70c4f80da84284badbe015ce1456063d0ded60405160405180910390a1565b60025460009033600160a060020a0390811691161461066657600080fd5b600082111561071757600160a060020a033316600090815260208190526040902054821161070f57600160a060020a0333166000908152602081905260409020546106b19083610c6b565b600160a060020a0333166000908152602081905260409020556004546106d79083610c6b565b600455600033600160a060020a0316600080516020610eea8339815191528460405190815260200160405180910390a350600161071b565b50600061071b565b5060015b919050565b600160a060020a031660009081526020819052604090205490565b60025460009033600160a060020a0390811691161461075957600080fd5b600082111561071757610770600019600454610c6b565b821161070f57600160a060020a0333166000908152602081905260409020546107999083610dd4565b600160a060020a0333166000908152602081905260409020556004546107bf9083610dd4565b600455600160a060020a0333166000600080516020610eea8339815191528460405190815260200160405180910390a350600161071b565b6107ff610ed7565b60408051908101604052600381527f53455400000000000000000000000000000000000000000000000000000000006020820152905090565b60025433600160a060020a0390811691161461085357600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60055460009060ff16156108985750600061046a565b600160a060020a03331660009081526020819052604090205482118015906108e45750600160a060020a0333166000908152602081905260409020546108de9083610c6b565b6101f411155b15610929576108f38383610dea565b15156108fe57600080fd5b60035461091690600160a060020a03166101f4610dea565b151561092157600080fd5b50600161046a565b50600061046a565b6005546000908190819060ff161561094c5760009250610c33565b6001610956610ecf565b61095e610ed3565b8c8c8c8c6040516c01000000000000000000000000600160a060020a039788168102825295871686026014820152939095169093026028830152603c820152605c810191909152607c810191909152609c0160405180910390208787876040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610a1a57600080fd5b505060206040510351600160a060020a0381166000908152600660205260409020549092508714610a4e5760009250610c33565b50600160a060020a03811660009081526020819052604090205480891115610a795760009250610c33565b610a83818a610c6b565b9050806101f41115610a985760009250610c33565b610aa4816101f4610c6b565b905080881115610ab75760009250610c33565b610ac18189610c6b565b600160a060020a03808416600090815260066020908152604080832060018d01905590829052808220849055918d1681522054909150610b01908a610dd4565b600160a060020a03808c166000908152602081905260408082209390935560035490911681522054610b35906101f4610dd4565b600354600160a060020a03908116600090815260208190526040808220939093553390911681522054610b689089610dd4565b60008033600160a060020a0316600160a060020a031681526020019081526020016000208190555089600160a060020a031682600160a060020a0316600080516020610eea8339815191528b60405190815260200160405180910390a3600354600160a060020a03908116908316600080516020610eea8339815191526101f460405190815260200160405180910390a333600160a060020a031682600160a060020a0316600080516020610eea8339815191528a60405190815260200160405180910390a3600192505b5050979650505050505050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600081831015610c7757fe5b50900390565b600160a060020a038084166000908152600160209081526040808320339094168352929052908120548183821015610cb85760009250610dcb565b50600160a060020a03851660009081526020819052604090205483811015610ce35760009250610dcb565b610ced8285610c6b565b600160a060020a0380881660009081526001602090815260408083203390941683529290529081209190915584118015610d39575084600160a060020a031686600160a060020a031614155b15610d9157610d488185610c6b565b600160a060020a038088166000908152602081905260408082209390935590871681522054610d779085610dd4565b600160a060020a0386166000908152602081905260409020555b84600160a060020a031686600160a060020a0316600080516020610eea8339815191528660405190815260200160405180910390a3600192505b50509392505050565b6000600019829003831115610de557fe5b500190565b600160a060020a03331660009081526020819052604081205482811015610e145760009150610ec8565b600083118015610e36575083600160a060020a031633600160a060020a031614155b15610e8e57610e458184610c6b565b600160a060020a033381166000908152602081905260408082209390935590861681522054610e749084610dd4565b600160a060020a0385166000908152602081905260409020555b83600160a060020a031633600160a060020a0316600080516020610eea8339815191528560405190815260200160405180910390a3600191505b5092915050565b3090565b3390565b602060405190810160405260008152905600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820836d89de42feadc5a751830a3b39de5c255985c45c0f5df3454046deb85ced0e0029", gas: 1000000},
  function (e, r) {
    if (e) throw e;
    if (typeof r.address !== "undefined") {
      console.log (
        "Deployed at " + r.address + " (tx: " + r.transactionHash + ")");
    }
  }).transactionHash) {
  console.log ("Deployment failed.  Probably web3.eth.accounts[0] is locked.");
}
