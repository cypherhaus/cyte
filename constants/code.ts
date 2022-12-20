export const LSD_ENV = `
REACT_APP_SUPABASE_URL=yourUrlHere 
REACT_APP_SUPABASE_KEY=yourKeyHere
REACT_APP_NETLIFY_URL=yourDeployedNetlifyUrl
REACT_APP_ZEBEDEE_KEY=yourZBDKey
`;

export const CREATE_USER_ON_AUTH = `
begin
  insert into public.profiles(id)
  values(new.id);

  return new;
end;
`;

export const CREATE_TX_ON_WITHDRAWAL = `
begin
  if new.settled = true then
    insert into public.settlements(id, debit, user_id, type)
    values(new.id, new.amount, new.user_id, 'WITHDRAWAL');

    return new;
  end if;

  return null;
end;
`;

export const CREATE_TX_ON_CHARGE = `
begin
  if new.settled = true then
    insert into public.settlements(id, credit, user_id, type)
    values(new.id, new.amount, new.user_id, 'FUND');

    return new;
  end if;

  return null;
end;
`;

export const CREATE_CREDIT_ON_DEBIT_PAYMENT = `
begin
  if new.debit > 0 then
    insert into public.payments(participant_id, credit, debit_id, user_id)
    values(new.user_id, new.debit, new.id, new.participant_id);

    return new;
  end if;

  return null;
end;
`;

export const BALANCE_AFTER_SETTLEMENT = `
-- Set up variables
declare
  settlements_balance integer;
  payments_balance integer;
  total_balance integer;

begin
  -- Get the balance from the settlements table 
  settlements_balance = (select coalesce(sum(credit) - sum(debit), 0))
  from public.settlements
  where user_id = new.user_id;

  -- Get the balance of the user from the payments table
  payments_balance = (select coalesce(sum(credit) - sum(debit), 0))
  from public.payments
  where user_id = new.user_id;

  -- Get the total balance across settlements and payments balance
  total_balance = (settlements_balance + payments_balance);
  
  -- Update the profile table to reflect the balance
  update public.profiles
  set balance = total_balance
  where id = new.user_id;

  return new;
end;
`;

export const BALANCE_AFTER_PAYMENT = `
-- Set up variables
declare
  -- Debitor variables 
  debitor_settlements_balance integer;
  debitor_payments_balance integer;
  debitor_total_balance integer;

  -- Creditor variables
  creditor_settlements_balance integer;
  creditor_payments_balance integer;
  creditor_total_balance integer;

begin
  -- DEBITOR

  -- Get the balance of the debitor from the settlements table 
  debitor_settlements_balance = (select coalesce(sum(credit) - sum(debit), 0))
  from public.settlements
  where user_id = new.user_id;

  -- Get the balance of the debitor from the payments table
  debitor_payments_balance = (select coalesce(sum(credit) - sum(debit), 0))
  from public.payments
  where user_id = new.user_id;

  -- Calculate total balance of the debitor
  debitor_total_balance = (debitor_settlements_balance + debitor_payments_balance);
  
  -- Update the debitors profile balance
  update public.profiles
  set balance = debitor_total_balance
  where id = new.user_id;

  return new;
end;
`;
