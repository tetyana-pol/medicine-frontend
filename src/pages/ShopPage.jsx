import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import { CardCompany } from "../components/CardCompany";
import { CardDrug } from "../components/CardDrug";

const { getAllCompany, getDrugsByCompany } = authService;

export const ShopPage = () => {
  const [companies, setCompanies] = useState(null);
  const [company, setCompany] = useState(null);
  const [drugs, setDrugs] = useState(null);

  useEffect(() => {
    getAllCompany().then((res) => {
      setCompanies(res);
      setCompany(res[0]);
    });
  }, []);

  useEffect(() => {
    if (company !== null) {
      getDrugsByCompany(company.id).then((res) => setDrugs(res));
    }
  }, [company]);

  return (
    <div className="container">
      <div className="companies">
        {companies !== null &&
          companies?.map((el) => (
            <CardCompany
              key={el.id}
              card={el}
              selectedCompanyId={company.id}
              onClick={() => setCompany(el)}
            />
          ))}
      </div>
      <div className="drugs">
        {drugs !== null &&
          drugs?.map((el) => <CardDrug key={el.id} card={el} />)}
      </div>
    </div>
  );
};
