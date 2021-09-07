const MilanToken = artifacts.require("MilanToken");

module.exports = function (deployer) {
  deployer.deploy(MilanToken);
};
