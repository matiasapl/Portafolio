type Props = {
  Nombre: string;
  Profecion: string;
  Foto?: string;
};

function PersonalInfo({ Nombre, Profecion, Foto }: Props) {
  return (
    <>
      <div className="d-flex align-items-center">
        <img
          src={Foto}
          alt="Foto perfil"
          className=""
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div>
          <h6 className="mb-0 fw-bold">{Nombre}</h6>
          <small className="text-muted">{Profecion}</small>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
