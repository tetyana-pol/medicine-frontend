import cn from "classnames";

export const CardCompany = ({ card, selectedCompanyId, onClick }) => {
  const { name } = card;

  return (
    <>
      <div
        className={cn("card card-company", {
          "card-company-selected": card.id === selectedCompanyId,
        })}
      >
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <a
                href="#"
                onClick={() => {
                  onClick(card);
                }}
              >
                <p className="title is-4">{name}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
