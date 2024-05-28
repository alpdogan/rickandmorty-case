export const multiSelectStyles = {
    multiValueLabel: (def: any) => ({
      ...def,
      backgroundColor: '#e2e8f0',
      padding: 5,
    }),
    multiValueRemove: (def: any) => ({
      ...def,
      backgroundColor: '#94a3b8',
      color: '#fff',
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
      width: 20,
      marginTop: 3,
      marginRight: 5,
      borderRadius: 5,
    }),
    menuPortal: (base: any) => ({
      ...base,
      borderRadius: 15,
    }),
    valueContainer: (base: any) => ({
      ...base,
      maxHeight: '65px',
      overflow: 'auto',
    }),
    option: (
      styles: any,
      { isFocused }: { isFocused: boolean }
    ) => ({
      ...styles,
      backgroundColor: isFocused ? "#DEEBFF" : null,
      color: isFocused ? null : null,
    }),
    menu: (def: any) => ({
      ...def,
      border: '1px solid #ccc',
      borderRadius: '15px',
    }),
  };