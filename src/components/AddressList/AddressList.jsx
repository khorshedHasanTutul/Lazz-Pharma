import AddressCard from "../AddressCard/AddressCard";
import { useContext } from "react";
import AddressContext from "../../store/address-context";
import { addressTypes } from "../../services/data-service";

const AddressList = () => {
  const { updateSlotName, addresses } = useContext(AddressContext);

  const addressList = {};
  addresses.forEach((ad) => {
    if (ad.Type === addressTypes.home) {
      addressList.home = ad;
    }

    if (ad.Type === addressTypes.office) {
      addressList.office = ad;
    }

    if (ad.Type === addressTypes.homeTown) {
      addressList.homeTown = ad;
    }
  });

  return (
    <div>
      <h3 className="t-uppercase t-14 mb-8">Saved Addresses</h3>
      <AddressCard
        address={addressList.home}
        title={"HOME"}
        onClick={updateSlotName.bind(null, addressTypes.home)}
      ></AddressCard>
      <AddressCard
        address={addressList.office}
        title={"OFFICE"}
        onClick={updateSlotName.bind(null, addressTypes.office)}
      ></AddressCard>
      <AddressCard
        address={addressList.homeTown}
        title={"HOME TOWN"}
        onClick={updateSlotName.bind(null, addressTypes.homeTown)}
      ></AddressCard>
    </div>
  );
};

export default AddressList;
