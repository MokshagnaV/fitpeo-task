import MenuItem from "@/components/common/MenuItem";
import ProductIcon from "@/assets/icons/ProductIcon";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import CustomerIcon from "@/assets/icons/CustomerIcon";
import IncomeIcon from "@/assets/icons/IncomeIcon";
import PromoteIcon from "@/assets/icons/PromoteIcon";
import HelpIcon from "@/assets/icons/HelpIcon";

function Menu() {
  return (
    <ul className="my-10">
      <li>
        <a href="/">
          <MenuItem icon={<DashboardIcon />} title="Dashboard" path="/" />
        </a>
      </li>
      <li>
        <a href="/product">
          <MenuItem
            icon={<ProductIcon />}
            title="Product"
            path="/product"
            submenu={true}
          />
        </a>
      </li>
      <li>
        <a href="/customers">
          <MenuItem
            icon={<CustomerIcon />}
            title="Customers"
            path="/customers"
          />
        </a>
      </li>
      <li>
        <a href="/income">
          <MenuItem icon={<IncomeIcon />} title="Income" path="/income" />
        </a>
      </li>
      <li>
        <a href="/promote">
          <MenuItem icon={<PromoteIcon />} title="Promote" path="/promote" />
        </a>
      </li>
      <li>
        <a href="/help">
          <MenuItem icon={<HelpIcon />} title="Help" path="/help" />
        </a>
      </li>
    </ul>
  );
}

export default Menu;
