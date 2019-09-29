export default (sequelize, DataTypes) => {
  const Heroes = sequelize.define('Heroes', {
    name: DataTypes.STRING,
    powers: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Heroes.associate = function(models) {
    // associations can be defined here
  };
  return Heroes;
};
